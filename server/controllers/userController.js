const User = require("../models/User");
const Reservation = require("../models/Reservation");

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select(["-password", "-tokens"]);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Update user role
const updateUserRole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    ).select(["-password", "-tokens", "-reservations"]); // Exclude password, tokens, reservations from response

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(201).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete user
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found." });
    }

    // If the user had reservations, delete them
    await Reservation.deleteMany({ user: id });

    res.status(410).json({ message: "User deleted successfully." });
  } catch (error) {
    next(error);
  }
};

// Delete Reservation request
const deleteReserveRequest = async (req, res, next) => {
  try {
    const { RId } = req.params;
    const deletedReservation = await Reservation.findByIdAndDelete(RId);

    if (!deletedReservation) {
      return res.status(404).json({ error: "Reservation not found." });
    }

    res.status(201).json({ message: "Reservation deleted successfully." });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  updateUserRole,
  deleteUser,
  deleteReserveRequest,
};
