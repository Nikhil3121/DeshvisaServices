import SubService from "../models/subServiceModel.js";

export const createSubService = async (req, res) => {
  try {
    const sub = await SubService.create(req.body);
    res.status(201).json(sub);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSubServicesByService = async (req, res) => {
  try {

    const subs = await SubService.find({
      serviceId: req.params.serviceId
    });

    res.json(subs);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSubService = async (req, res) => {
  try {

    const sub = await SubService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(sub);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSubService = async (req, res) => {
  try {

    await SubService.findByIdAndDelete(req.params.id);

    res.json({ message: "Subservice deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};