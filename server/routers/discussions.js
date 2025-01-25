// import { Router } from "express";
// import Discussion from "../models/discussion.js";

// //creating a router
// const router = Router();

// //creating the post method for my tracker api
// router.post("/", async (request, response) => {
//   try {
//     const newTracker = new Discussion(request.body);

//     const data = await newTracker.save();

//     response.json(data);
//   } catch (error) {
//     // Output error to the console incase it fails to send in response
//     console.log(error);

//     if ("name" in error && error.name === "ValidationError")
//       return response.status(400).json(error.errors);

//     return response.status(500).json(error.errors);
//   }
// });

// router.get("/", async (request, response) => {
//   try {
//     const query = request.query;

//     const data = await Discussion.find(query);

//     response.json(data);
//   } catch (error) {
//     console.log(error);
//     return response.status(500).json(error.errors);
//   }
// });

// router.get("/:id", async (request, response) => {
//   try {
//     const data = await Discussion.findById(request.params.id);

//     response.json(data);
//   } catch (error) {
//     console.log(error);

//     return response.status(500).json(error.errors);
//   }
// });

// router.delete("/:id", async (request, response) => {
//   try {
//     const data = await Discussion.findByIdAndDelete(request.params.id);

//     response.json(data);
//   } catch (error) {
//     console.log(error);

//     return response.status(500).json(error.errors);
//   }
// });

// export default router;
