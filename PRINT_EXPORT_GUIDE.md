# Quick Print & Export Guide

## 🖨️ How to Export Your Resume to PDF

### NEW: One-Click Export! 🎉

The resume builder now features built-in **Save as PDF** and **Print** buttons for easy export.

### Method 1: Using the Save as PDF Button (Recommended)

1. **Start the Application**
   ```bash
   npm start
   ```
   Wait for the message: "Application bundle generation complete."

2. **Open in Browser**
   Navigate to: `http://localhost:4200`
   Your resume will automatically load with action buttons in the top-right corner.

3. **Click "Save as PDF"**
   - Look for the blue button with download icon in the top-right
   - Click it to open the print dialog
   - The filename will automatically be set to: `Victor_Tran_Resume.pdf`
   - Select "Save as PDF" as destination
   - Choose your save location
   - Click "Save"

### Method 2: Using the Print Button

1. **Click the white "Print" button** in the top-right
2. Opens the standard print dialog
3. You can either:
   - Print to a physical printer, OR
   - Select "Save as PDF" as destination

### Method 3: Keyboard Shortcut (Traditional)

   **Windows/Linux:**
   - Press `Ctrl + P`
   - Select "Save as PDF" as the destination
   - **Important Settings:**
     - Layout: Portrait
     - Paper size: Letter (8.5 x 11 inches)
     - Margins: Default
     - Scale: 100%
     - Background graphics: OFF (recommended for ATS)
   - Click "Save"

   **Mac:**
   - Press `Cmd + P`
   - Click "PDF" in the bottom-left corner
   - Select "Save as PDF"
   - Use same settings as above

## ✅ ATS Compatibility Checklist

Before submitting your resume, verify:

- [ ] No images, icons, or graphics
- [ ] Simple single-column layout
- [ ] Standard fonts (Arial, Times New Roman, Calibri)
- [ ] Black text on white background
- [ ] All text is selectable in the PDF
- [ ] File size is under 2MB
- [ ] Saved as PDF (not .doc or .docx unless requested)
- [ ] File name format: `FirstName_LastName_Resume.pdf`

## 🧪 Testing Your Resume

### Free ATS Testing Tools

1. **Jobscan** (https://www.jobscan.co)
   - Upload your PDF
   - Paste the job description
   - Review compatibility score

2. **Resume Worded** (https://resumeworded.com)
   - Free instant feedback
   - ATS optimization tips

3. **Text Selection Test**
   - Open your PDF
   - Try to select and copy text
   - If text selection works, ATS can likely read it

## 📊 Optimization Tips

### Keywords
- Include exact phrases from job descriptions
- Use industry-standard terms
- Avoid acronyms without spelling them out first
  - Example: "Application Programming Interface (API)"

### Action Verbs
Use strong action verbs for achievements:
- ✅ Developed, Implemented, Designed, Optimized
- ✅ Led, Managed, Coordinated, Delivered
- ❌ Responsible for, Worked on, Helped with

### Quantify Achievements
- ✅ "Improved API latency by 30%"
- ✅ "Led team of 5 developers"
- ❌ "Improved performance"
- ❌ "Led a team"

## 🎯 File Naming Best Practices

Good examples:
- `Victor_Tran_Resume.pdf`
- `Victor_Tran_Software_Developer.pdf`
- `Tran_Victor_Resume_2025.pdf`

Avoid:
- `resume.pdf`
- `my_cv_final_v2.pdf`
- `Updated Resume (1).pdf`

## 🔍 Common ATS Issues & Fixes

| Issue | Fix |
|-------|-----|
| Text not selectable | Re-export as PDF, don't scan paper resume |
| Special characters render incorrectly | Use standard ASCII characters only |
| Dates not recognized | Use standard format: "Jan 2023 – Present" |
| Skills not detected | Move skills higher, use exact job posting terms |
| Contact info not parsed | Keep phone/email on separate lines or pipe-separated |

## 💡 Pro Tips

1. **Save Multiple Versions**
   - Tailor your resume for each job application
   - Update keywords to match job descriptions
   - Save as: `YourName_CompanyName_Role.pdf`

2. **Test Before Submitting**
   - Open PDF in different viewers (Adobe, Chrome, Preview)
   - Zoom to 150% - text should remain crisp
   - Select all text (Ctrl+A) - everything should be selectable

3. **Keep it Updated**
   - Review and update every 3-6 months
   - Add new skills and projects
   - Remove outdated technologies

## 📱 Mobile Viewing

While optimized for desktop/print, the resume is responsive:
- Accessible on tablets and phones
- Contact info remains readable
- Layout adjusts for smaller screens

## 🆘 Troubleshooting

### "Page is blank"
- Check browser console (F12) for errors
- Ensure Angular dev server is running
- Try refreshing the page (Ctrl+R)

### "Styles look wrong"
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check that `resume.component.scss` is loading

### "PDF is too large"
- Disable background graphics in print settings
- Ensure no images are embedded
- Typical size should be 50-200 KB

### "Text is too small/large when printing"
- Set scale to 100% in print dialog
- Check page size is set to Letter (8.5 x 11)
- Try different browser if issue persists

## 📞 Quick Reference

| Action | Windows/Linux | Mac |
|--------|--------------|-----|
| Print | Ctrl + P | Cmd + P |
| Refresh | Ctrl + R | Cmd + R |
| Hard Refresh | Ctrl + Shift + R | Cmd + Shift + R |
| Select All | Ctrl + A | Cmd + A |
| Developer Tools | F12 | Cmd + Option + I |

## 🚀 Next Steps

After exporting your PDF:
1. Test it with an ATS checker
2. Proofread for typos and formatting
3. Ask a friend to review
4. Tailor keywords for each job application
5. Save with a professional file name
6. Submit with confidence!

---

**Need Help?** Check the main `RESUME_BUILDER_README.md` for detailed documentation.

