import {connect, connection, Types} from "mongoose";

connect(`mongodb+srv://${process.env.SECRET_USERNAME}:${process.env.SECRET_PASS}@test-auth.keyo5.mongodb.net/?retryWrites=true&w=majority`, () => {
    console.log("database has been connected")
});

connection.on('error', console.error.bind(console, 'connection error'));

export default {connection, Types}