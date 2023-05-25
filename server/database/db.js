import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://harshvaslas:vaslas@ac-tvl0ced-shard-00-00.m4xp6b6.mongodb.net:27017,ac-tvl0ced-shard-00-01.m4xp6b6.mongodb.net:27017,ac-tvl0ced-shard-00-02.m4xp6b6.mongodb.net:27017/?ssl=true&replicaSet=atlas-5e5xl3-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};
export default Connection;