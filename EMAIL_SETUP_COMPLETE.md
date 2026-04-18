# 📧 Contact Form Email Setup - Complete!

## ✅ What's Done

Your contact form now sends emails to **both the user AND admin** using your Gmail account (sharvixinnovations@gmail.com).

**When users submit the form:**
- ✅ User receives a confirmation email
- ✅ Admin gets a detailed notification with all form details
- ✅ Form includes service interests in the email
- ✅ Error handling if email fails

---

## 🚀 How to Run

### Option 1: Run Both Frontend & Backend Together (Recommended)
```bash
npm run dev:full
```
This will start:
- Frontend: http://localhost:5173 (Vite dev server)
- Backend: http://localhost:5000 (Email server)

### Option 2: Run Separately (If you prefer)
**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

---

## 📋 Credentials Used

Your `.env` file already contains:
- **Email:** sharvixinnovations@gmail.com
- **App Password:** Already configured (hidden in .env)
- **Backend:** Listening on localhost:5000

---

## 📧 Email Flow

```
User fills form
      ↓
[Form Validation]
      ↓
[POST to http://localhost:5000/api/send-email]
      ↓
Backend sends 2 emails:
├─ Confirmation to user
└─ Notification to admin (sharvixinnovations@gmail.com)
      ↓
[Success Message] → User sees "Message Sent!"
```

---

## 🧪 Test It

1. Start the servers: `npm run dev:full`
2. Go to http://localhost:5173/contact
3. Fill the form
4. Click "Send message"
5. Check:
   - Your email inbox for confirmation
   - Gmail (sharvixinnovations@gmail.com) for admin notification

---

## 📁 Files Created/Modified

| File | Purpose |
|------|---------|
| `server.js` | Node.js backend using Express & Nodemailer |
| `.env` | Gmail credentials (keep secret!) |
| `package.json` | Added server & dev:full scripts |
| `ContactSection.jsx` | Updated to call backend API |

---

## 🔒 Security Notes

- ✅ `.env` is in `.gitignore` (credentials won't be committed)
- ✅ App Password is stored server-side only
- ✅ Frontend only sends basic form data to backend
- ✅ Gmail remains secure (only backend accesses it)

---

## ⚠️ Important: Gmail App Password

The app password you provided (`gimv trah iodr nxwf`) is already in your `.env` file. This allows the backend to send emails from your Gmail account without the regular account password.

✅ **It's secure because:**
- Only works on this app
- .env is not in git
- Can be regenerated anytime from Gmail settings

---

## 🐛 Troubleshooting

### "Failed to send message" error
1. Make sure both servers are running: `npm run dev:full`
2. Check browser console for errors
3. Verify backend is running: http://localhost:5000/api/health

### Emails not arriving
1. Check spam/promotions folder
2. Check server console for errors
3. Verify credentials in `.env` are correct

### Backend not starting
```bash
# Kill any process using port 5000
lsof -ti:5000 | xargs kill -9  # Mac/Linux
netstat -ano | findstr :5000   # Windows (then kill the process)

# Then restart
npm run server
```

---

## 📞 What Users Get

**User Confirmation Email:**
- Thank you message
- Their submitted details
- Phone number (if provided)
- Services interested
- Expected response time

**Admin Notification Email:**
- All user details in a formatted table
- Full message content
- Quick response reminder

---

**Status:** ✅ Ready to use! Start with `npm run dev:full`
