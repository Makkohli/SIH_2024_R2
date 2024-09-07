import express from "express";
import cors from "cors";
import authMiddleware from "../middleware/authMiddleware.js";
import {dataSchema} from "../zodValidation/index.js";
import { Entry, User } from "../models/index.js";

const router = express.Router({ mergeParams: true });
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());

router.post('/', authMiddleware, async(req, res) => {
    const userId = req.body.userId;
    const newData = req.body.newData;
    const { success } = dataSchema.safeParse(newData);
    if (!success) {
      return res.status(411).json({ message: "Incorrect input" });
    }
    const dbUser = await User.findOne({ userId: userId });
    if (!dbUser) {
      return res.status(411).json({ message: "No such Account found with this username" });
    }
    const entryObj = {
        userId: dbUser.userId,
        facilityId: dbUser.facilityId,
        subDistrictId: dbUser.subDistrictId,
        districtId: dbUser.districtId,
        data: newData,
    } 
    try {
        const newEntry = new Entry(entryObj);
        await newEntry.save();
        return res.status(201).json({ message: "Entry successfully created", entryId: newEntry.entryId });
    } catch (error) {
        return res.status(500).json({ message: "Failed to create entry", error: error.message });
    }
})

router.get('/', authMiddleware, async (req, res) => {
    const userId = req.body.userId;
    try {
        const dbUser = await User.findOne({ userId: userId });
        if (!dbUser) {
            return res.status(411).json({ message: "No such Account found with this username" });
        }
        const queryObj = {
            userId: dbUser.userId,
            facilityId: dbUser.facilityId,
            subDistrictId: dbUser.subDistrictId,
            districtId: dbUser.districtId,
        }
        const entries = await Entry.find(queryObj);
        return res.status(200).json({ entries: entries });
    } catch (error) {
        return res.status(500).json({ message: "Failed to retrieve entries", error: error.message });
    }
});

router.put('/', authMiddleware, async (req, res) => {
    const updatedData = req.body.updatedData;
    const { entryId } = updatedData;

    const { success } = dataSchema.safeParse(updatedData.data);
    if (!success) {
        return res.status(411).json({ message: "Incorrect input" });
    }

    try {
        const entry = await Entry.findOneAndUpdate(
            { entryId: entryId },
            updatedData,
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ message: "Entry not found" });
        }

        return res.status(200).json({ message: "Entry successfully updated", entry: entry });
    } catch (error) {
        return res.status(500).json({ message: "Failed to update entry", error: error.message });
    }
});

export default router;



