const express = require("express");
const {
  getAllBrands,
  addBrand,
  updateBrandStatus,
  getBrand,
  updateBrand,
  deleteBrand,
} = require("../../controller/brand/brandController");
const upload = require("../../middlemare/singleFileUpload");
const router = express.Router();

router.get("/all", getAllBrands);
router.get("/:brandId", getBrand);
router.post("/add-brand", upload.single("picture"), addBrand);
router.patch("/update/:brandId", upload.single("picture"), updateBrand);
router.patch("/update/status/:brandid", updateBrandStatus);
router.delete("/delete/:brandId", deleteBrand);

module.exports = router;
