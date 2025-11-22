import productCtrl from "../controllers/product.controller.js";
import authCtrl from "../controllers/auth.controller.js";
import userCtrl from "../controllers/user.controller.js";
const router = express.Router();
router.route("/api/products").get(productCtrl.list);
router
  .route("/api/products/by/:userId")
  .post(authCtrl.requireSignin, userCtrl.isAdmin, productCtrl.create);  
router.route("/api/products/:productId").get(productCtrl.read);
router
  .route("/api/product/image/:productId")
  .get(productCtrl.photo, productCtrl.defaultPhoto);
router.route("/api/product/defaultphoto").get(productCtrl.defaultPhoto);
router
  .route("/api/product/:userId/:productId")
  .put(authCtrl.requireSignin, userCtrl.isAdmin, productCtrl.update)
  .delete(authCtrl.requireSignin, userCtrl.isAdmin, productCtrl.remove);

router.param("productId", productCtrl.productByID);
router.param("userId", userCtrl.uesrByID);
export default router;
