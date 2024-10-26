const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const paymentRoute = require('./routes/paymentRoute');
const healthRoutes = require('./routes/healthRoutes');
const messageRoute = require('./routes/messageRoute'); // Added messageRoutes
const bodyParser = require('body-parser');
const { server, app } = require('./socket/socket'); // Import the server from socket.js

dotenv.config();

app.use(bodyParser.json());

app.use(cors());

// Routes
app.use('/api/knockknock', healthRoutes);
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoute);
app.use('/api/messages', messageRoute); // Added messageRoutes

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Start the server with Socket.IO support
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
