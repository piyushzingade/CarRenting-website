"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const car_route_1 = __importDefault(require("./routes/car.route"));
const packages_route_1 = __importDefault(require("./routes/packages.route"));
const contact_route_1 = __importDefault(require("./routes/contact.route"));
const db_1 = __importDefault(require("./db/db"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/auth", auth_routes_1.default);
app.use("/user", user_route_1.default);
app.use("/cars", car_route_1.default);
app.use("/packages", packages_route_1.default);
app.use("/contact", contact_route_1.default);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    (0, db_1.default)();
    console.log("App is up and running");
});
