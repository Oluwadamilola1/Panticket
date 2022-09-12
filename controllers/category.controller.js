import Category from "../models/category.model";

export async function createCategory(req, res) {
  try {
    const newCategory = await Category.create(req.body);
    return res.status(201).json({
      message: "category created successfully",
      event: newCategory,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Issues processing your request",
    });
  }
}
export function deleteCategory(req, res) {
  Category.findByIdAndDelete(req.params.id, (err, category) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "unable to delete category ",
      });
    } else {
      return res.status(200).json({
        message: "category deleted",
        category,
      });
    }
  });
}
export function updateCategory(req, res) {
  Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnDocument: "after",
    },
    function (err, updated) {
      if (err) {
        return res.status(500).json({
          message: "unable to update category ",
        });
      } else {
        return res.status(200).json({
          message: "category updated",
          category: updatedCategory,
        });
      }
    }
  );
}
export function fetchCategories(req, res) {
  Category.findById(req.params.id, function (err, categories) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "unable to fetch categories ",
      });
    } else {
      return res.status(200).json({
        message: "categories fetched",
        categories,
      });
    }
  });
}

export function fetchCategoryById(req, res) {
  Category.findById(req.params.id, function (err, category) {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "unable to fetch category ",
      });
    } else {
      return res.status(200).json({
        message: "category fetched",
        category,
      });
    }
  });
}
