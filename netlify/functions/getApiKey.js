exports.handler = async function () {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allows frontend requests
            "Access-Control-Allow-Headers": "Content-Type"
        },
        body: JSON.stringify({ key: process.env.AIzaSyDEl1YZZC9lKtobjbKJOzvFoG58LYqV2AE})
    };
};
