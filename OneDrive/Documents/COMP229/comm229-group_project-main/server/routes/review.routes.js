import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";
import reviewCtrl from "../controllers/review.controller.js";
import productCtrl from "../controllers/product.controller.js";
const router = express.Router();
router.route("/api/:reviewId").get(reviewCtrl.read);
router.route("/api/reveiws").get(reviewCtrl.list);
router
  .route("/api/reviews/by/:productId/:userId")
  .post(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    reviewCtrl.create
  )
router
  .route("/api/reviews/:reviewId/")
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, reviewCtrl.listByProduct)
  .put(authCtrl.requireSignin, reviewCtrl.isOwner, reviewCtrl.update)
  .delete(authCtrl.requireSignin, reviewCtrl.isOwner, reviewCtrl.remove);
  
router
  .route("/api/reviews/logo/:reviewId")
  .get(reviewCtrl.photo, reviewCtrl.defaultPhoto);
router.route("/api/reviews/defaultphoto").get(reviewCtrl.defaultPhoto);
router.param("productId", productCtrl.productByID);
router.param("userId", userCtrl.userByID);
export default router;
