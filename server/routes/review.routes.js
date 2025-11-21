import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";
import reviewCtrl from "../controllers/review.controller.js";
const router = express.Router();
router.route("/api/shop/:reviewId").get(reviewCtrl.read);
router.route("/api/reveiws").get(reviewCtrl.list);
router
  .route("/api/reviews/by/:productId/:userId")
  .post(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    reviewCtrl.create
  )
  .get(authCtrl.requireSignin, authCtrl.hasAuthorization, reviewCtrl.listByProduct);
router
  .route("/api/reviews/:productId/:reviewId/:")
  .put(authCtrl.requireSignin, reviewCtrl.isOwner, reviewCtrl.update)
  .delete(authCtrl.requireSignin, reviewCtrl.isOwner, reviewCtrl.remove);
router
  .route("/api/reviews/logo/:reviewId")
  .get(reviewCtrl.photo, reviewCtrl.defaultPhoto);
router.route("/api/reviews/defaultphoto").get(reviewCtrl.defaultPhoto);
router.param("shopId", shopCtrl.shopByID);
router.param("productId", productCtrl.productByID);
router.param("userId", productCtrl.userByID);
export default router;
