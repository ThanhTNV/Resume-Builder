# ATS-Optimized Resume Builder

## Overview

This Angular application implements a professionally designed, ATS (Applicant Tracking System) optimized resume template following industry best practices for maximum compatibility with automated screening systems and human recruiters.

## Features

### 🎯 NEW: One-Click PDF Export
- **Built-in "Save as PDF" button** - No manual print dialog needed
- **Automatic filename generation** - `Victor_Tran_Resume.pdf`
- **Professional action buttons** - Modern UI with download and print icons
- **Mobile responsive** - Works on desktop, tablet, and mobile
- **Hidden in print** - Buttons don't appear in exported PDF

### ✅ ATS Compatibility
- **Simple, single-column layout** - No complex multi-column designs
- **No graphics or icons** - Plain text only for optimal parsing
- **Web-safe fonts** - Arial, Times New Roman, Calibri
- **Semantic HTML structure** - Proper heading hierarchy
- **No tables** - Uses lists and divs for layout
- **Left-aligned text** - Standard alignment for ATS systems
- **Black on white** - Maximum readability and contrast

### 📄 Template Specifications
- **Font Size**: 12pt body text, 14pt section headings, 18pt name
- **Line Height**: 1.15-1.5 for optimal readability
- **Margins**: 1 inch (2.54cm) on all sides
- **Spacing**: Consistent 10-12pt between sections
- **Print-ready**: Optimized for PDF export via browser print

## Project Structure

```
src/app/
├── models/
│   └── resume.model.ts          # TypeScript interfaces for resume data
├── services/
│   └── resume-data.service.ts   # Service containing Victor Tran's CV data
├── components/
│   └── resume/
│       ├── resume.component.ts    # Resume component logic
│       ├── resume.component.html  # ATS-optimized template
│       └── resume.component.scss  # Styling following ATS specifications
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI 20+

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:4200
```

## Customizing the Resume

### Updating Personal Information

Edit the data in `src/app/services/resume-data.service.ts`:

```typescript
getResumeData(): ResumeData {
  return {
    personalInfo: {
      name: 'Your Name',
      title: 'Your Professional Title',
      location: 'Your Location',
      email: 'your.email@example.com',
      phone: '+1 234 567 8900',
      linkedin: 'linkedin.com/in/yourprofile',
      github: 'github.com/yourusername'
    },
    // ... update other sections
  }
}
```

### Adding/Removing Sections

The resume template includes the following sections:
1. **Header** - Name and contact information
2. **Professional Summary** - Brief career overview
3. **Core Competencies** - Key skills (bullet points)
4. **Professional Experience** - Work history with achievements
5. **Highlighted Projects** - Notable projects with details
6. **Education** - Academic background
7. **Certifications** - Professional certifications
8. **Languages** - Language proficiencies

To modify sections, edit `src/app/components/resume/resume.component.html`.

## Exporting to PDF

### Method 1: One-Click Export (Recommended) ⭐

1. Open the resume in your browser
2. Look for the blue **"Save as PDF"** button in the top-right corner
3. Click the button
4. The print dialog opens with filename: `Victor_Tran_Resume.pdf`
5. Select "Save as PDF" as destination
6. Choose save location and click "Save"

**That's it!** The button handles all the setup automatically.

### Method 2: Print Button

1. Click the white **"Print"** button in the top-right corner
2. Opens standard print dialog
3. Choose "Save as PDF" or print to physical printer

### Method 3: Keyboard Shortcut

1. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
2. Set the following print settings:
   - **Destination**: Save as PDF
   - **Layout**: Portrait
   - **Paper size**: Letter (8.5 x 11 inches)
   - **Margins**: Default or Custom (1 inch)
   - **Scale**: 100%
3. Click "Save" to export

### Button Features

The action buttons include:
- 🔵 **Save as PDF**: Primary action with auto-generated filename
- ⚪ **Print**: Secondary action for print/save options
- 📱 **Responsive**: Adapts to mobile and tablet screens
- 🖨️ **Print-safe**: Automatically hidden in PDF output

## ATS Testing & Validation

### Testing Tools
1. **Jobscan** (jobscan.co) - Compare resume against job descriptions
2. **Resume Worded** (resumeworded.com) - ATS compatibility checker
3. **Resunate** - Resume parsing verification

### Best Practices for ATS Optimization

✅ **DO:**
- Use standard section headings (e.g., "Work Experience", "Education")
- Include relevant keywords from job descriptions
- Use bullet points for achievements
- Keep formatting simple and consistent
- Save as PDF (unless employer specifically requests .docx)
- Use standard date formats (e.g., "Jan 2023 – Present")

❌ **DON'T:**
- Use images, logos, or icons
- Include headers/footers with page numbers
- Use tables for layout
- Apply text boxes or columns
- Use fancy fonts or colors
- Include graphics or charts
- Embed hyperlinks in the PDF text

## Styling Specifications

### Typography
- **Primary Font**: Arial (fallback: Calibri, Times New Roman)
- **Name**: 18pt, bold, centered
- **Section Headings**: 14pt, bold, left-aligned
- **Body Text**: 12pt, regular
- **Contact Info**: 11pt

### Spacing
- **Section Margins**: 12pt between sections
- **Line Height**: 1.15-1.5
- **Bullet Spacing**: 6-8pt between items
- **Container Padding**: 1 inch (72pt) on all sides

### Colors
- **Text**: #000000 (pure black)
- **Background**: #FFFFFF (pure white)
- No accent colors or gradients

## Mobile Responsiveness

While primarily designed for desktop/print, the template includes responsive breakpoints:

```scss
@media screen and (max-width: 600px) {
  .resume-container {
    padding: 0.5in;
  }
}
```

## Browser Compatibility

Tested and optimized for:
- ✅ Google Chrome 90+
- ✅ Mozilla Firefox 88+
- ✅ Microsoft Edge 90+
- ✅ Safari 14+

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
```

Output will be in the `dist/` directory.

## Technical Stack

- **Framework**: Angular 20.3
- **Language**: TypeScript 5.9
- **Styling**: SCSS
- **Build Tool**: Angular CLI
- **Server**: Express.js (for SSR)

## Performance Considerations

- **File Size**: HTML output kept under 100KB
- **Load Time**: Optimized for instant rendering
- **Print Performance**: Optimized for fast PDF generation
- **No External Dependencies**: All fonts are web-safe system fonts

## Accessibility

The template follows accessibility best practices:
- Semantic HTML5 structure
- Proper heading hierarchy (h1, h2)
- High contrast ratio (21:1)
- Screen-reader friendly markup
- Print-accessible content

## Version History

### Version 1.0.0
- Initial release with Victor Tran's resume
- Full ATS optimization
- Print-ready PDF export
- Mobile responsive design
- Zero linter errors

## Support & Customization

### Common Customizations

1. **Change Font**: Update in `resume.component.scss`
```scss
.resume-container {
  font-family: 'Times New Roman', serif; // Your preferred font
}
```

2. **Adjust Spacing**: Modify margin/padding values
```scss
.section {
  margin-bottom: 15pt; // Increase spacing
}
```

3. **Two-Page Resume**: For senior professionals
```scss
.resume-container {
  max-width: 8.5in;
  // Content will naturally flow to second page
}
```

## License

This project is available for personal and commercial use.

## Credits

**Resume Template Design**: Based on ATS-Optimized CV best practices
**Developer**: Built with Angular 20
**Data Source**: Victor Tran's CV (CV_information.md)

## Additional Resources

- [ATS Resume Guidelines](https://www.jobscan.co/blog/ats-resume-guide/)
- [Resume Keywords Best Practices](https://www.indeed.com/career-advice/resumes-cover-letters/resume-keywords)
- [Angular Documentation](https://angular.dev)

---

**Note**: This is a living document. Update this README as you customize the template for your needs.

