import Router from 'express';

import UserCtrl from "../controller/UserController";
import registerValidations from "../validations/registration";

const router = new (Router as any)();

router.post("/registration", registerValidations, UserCtrl.create);
router.post("/login", registerValidations, UserCtrl.verify);

// @ts-ignore
export default router;