import { Component } from "../models/componentSchema.js";

export const addComponent = async (req, res) => {
  try {
    const { name, slug, category, tags, description, code } = req.body;

    if (!name || !slug || !category || !code) {
      return res.status(400).json({
        success: false,
        message: "All Fields Required",
      });
    }

    const component = new Component({
      name,
      slug,
      category,
      tags,
      description,
      code,
    });

    await component.save();

    return res.status(201).json({
      success: true,
      message: "New Component Added Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteComponent = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID Required",
      });
    }

    const component = Component.findByIdAndDelete(id);

    if (!component) {
      return res.status(400).json({
        success: false,
        message: "Component does not exits",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Component Deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
