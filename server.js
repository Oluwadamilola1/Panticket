import express from "express";
import { homeController } from "./controllers/home.controller";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  createEvent,
  fetchEvents,
  deleteEvent,
  updateEvent,
  fetchEventById,
} from "./controllers/event.controller";
import {
  createCategory,
  fetchCategories,
  deleteCategory,
  updateCategory,
  fetchCategoryById,
} from "./controllers/category.controller";
import { validateEventData } from "./controllers/middleware/event.validator";
import {
  validateOrganizerData,
  validateOrganizerUpdateData,
} from "./controllers/middleware/organizer.validator";
import {
  createOrganizer,
  fetchOrganizers,
  deleteOrganizer,
  updateOrganizer,
  fetchOrganizerById,
} from "./controllers/organizer.controller";
import {
  validateCategoryData,
  validateCategoryUpdateData,
} from "./controllers/middleware/category.validator";
import {
  validateTicketTypeData,
  validateTicketTypeUpdateData,
} from "./controllers/middleware/tickettype.validator";
import {
  createTicketType,
  deleteTicketType,
  fetchTicketType,
  fetchTicketTypeById,
  updateTicketType,
} from "./controllers/tickettype.controller";
dotenv.config();

const connectToDB = () => mongoose.connect(process.env.DEV_DB);

connectToDB()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

const server = express();
//Add code to make our server be able to read json form and url encoded form
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

if (process.env.NODE_ENV !== "development") {
  port = process.env.PORT;
}

const port = process.env.PORT || 4001;

server.get("/", homeController);

// events routes
server.get("/event", fetchEvents);
server.post("/event", validateEventData, createEvent);
server.get("/event/:id", fetchEventById);
server.put("/event/:id", updateEvent);
server.delete("/event/:id", deleteEvent);

//category routes
server.get("/category", fetchCategories);
server.post("/category", validateCategoryData, createCategory);
server.get("/category/:id", fetchCategoryById);
server.put("/category/:id", validateCategoryUpdateData, updateCategory);
server.delete("/category/:id", deleteCategory);

//tickettypes routes
server.get("/tickettype", fetchTicketType);
server.post("/tickettype", validateTicketTypeData, createTicketType);
server.get("/tickettype/:id", fetchTicketTypeById);
server.put("/tickettype/:id", validateTicketTypeUpdateData, updateTicketType);
server.delete("/tickettype/:id", deleteTicketType);

//organizer routes
server.get("/organizer", fetchOrganizers);
server.post("/organizer", validateOrganizerData, createOrganizer);
server.get("/organizer/:id", fetchOrganizerById);
server.put("/organizer/:id", validateOrganizerUpdateData, updateOrganizer);
server.delete("/organizer/:id", deleteOrganizer);

server.listen(port, () => {
  console.log("server started and running on port " + port);
});
