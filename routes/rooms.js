const express = require('express');
var router = express.Router();
var roomController = require('../controllers/hotels_controller');
const auth = require('../_helpers/authentication');

/**
 * @swagger
 * /rooms/getroom:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     summary: Get free rooms from hotel.
 *     description: Find rooms with occupied=false.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the hotel to search
 *                 example: TestHotel4
 *     responses:
 *       400:
 *          description: "Bad request"
 * 
 * @swagger
 * /rooms/addroom:
 *   post:
 *     security:
 *     - bearerAuth: []
 *     summary: Add a room
 *     description: Add a room to the hotel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the hotel to add the room number to.
 *                 example: TestHotel4
 *               number:
 *                 type: integer
 *                 description: add room number to the room.
 *                 example: 21
 *     responses:
 *       405:
 *          description: "invalid input"
 * 
 * definitions:
 *   Room:
 *     type: object
 *     properties:
 *       number:
 *         type: integer
 *         description: The room number.
 *         example: 10
 *       occupied:
 *         type: boolean
 *         description: defines if the room is rented
 *         example: true
 *       guests:
 *         type: array
 *         description: list of all guests occupying the room
 *         items:
 *           type: object
 *           properties:
 *             guestID:
 *               type: integer
 *             description: ID reference to users
 *
 *   roomName:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         description: Name of the hotel to search in.
 *         example: TestHotel
 *  
 *  
 * components:  
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 * security:
 * - bearerAuth: []
*/

//Post add room
router.post('/addroom', auth.authenticateJWT ,roomController.addRoom);

//Post get free rooms
router.post('/getroom', roomController.searchFreeRooms);

module.exports = router;
