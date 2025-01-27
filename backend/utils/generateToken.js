import jwt from 'jsonwebtoken';

export const generateTokenSetCookie = (userId, res) => {
    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, {maxAge: 15 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'None', secure: false});
}