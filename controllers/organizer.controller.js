import Organizer from "../models/organizer.model";

export async function createOrganizer(req, res) {
  try {
    console.log(req.body);
    const organizer = await Organizer.create(req.body);
    return res.status(201).json({
      message: "organizer created successfully",
      organizer: organizer,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({
      message: "Issues processing your request",
    });
  }
}
export function deleteOrganizer(req, res) {
  Organizer.findByIdAndDelete(req.params.id, (err, organizer) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "issue deleting organizer ",
      });
    } else {
      return res.status(200).json({
        message: "organizer deleted" + err.message,
        organizer,
      });
    }
  });
}
export function updateOrganizer(req, res) {
  Organizer.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      returnDocument: "after",
    },
    function (err, updated) {
      if (err) {
        return res.status(400).json({
          message: "issue updating organizer ",
        });
      } else {
        return res.status(200).json({
          message: "organizer updated" + err.message,
          organizer: updatedOrganizer,
        });
      }
    }
  );
}
export function fetchOrganizers(req, res) {
  Organizer.findById(req.params.id, function (err, organizers) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "issue fetching organizers ",
      });
    } else {
      return res.status(200).json({
        message: "organizers fetched" + err.message,
        organizers,
      });
    }
  });
}
export function fetchOrganizerById(req, res) {
  Organizer.findById(req.params.id, function (err, organizer) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "issue fetching organizer " + err.message,
      });
    } else {
      return res.status(200).json({
        message: "organizer fetched",
        organizer,
      });
    }
  });
}
