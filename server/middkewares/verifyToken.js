import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
    const token = req.cookies?.token || req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized request vishal"
        });
    };

    console.log(token)

    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid token"
                });
            }

            req.id = user.id;
            req.role = user.role;
            next(); // Only call next if token is valid
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export default verifyToken;





