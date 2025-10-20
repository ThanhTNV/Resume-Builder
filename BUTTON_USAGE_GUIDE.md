# Action Buttons Usage Guide

## Visual Overview

```
┌─────────────────────────────────────────────────────────────┐
│                                    ┌─────────┐  ┌─────────┐  │
│                                    │  📥 Save│  │  🖨️ Print│  │
│                                    │  as PDF │  │         │  │
│                                    └─────────┘  └─────────┘  │
│                                                               │
│                      VICTOR TRAN                              │
│          Software Developer | Integration Engineer           │
│                                                               │
│  +84 787 694 315 | thanhtran193.work@gmail.com ...          │
│                                                               │
│  Professional Summary                                         │
│  Versatile and proactive Software Developer...                │
│                                                               │
│  [... Resume Content ...]                                     │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

## Button Descriptions

### 🔵 Save as PDF Button (Primary)
```
┌──────────────────┐
│  📥 Save as PDF  │  ← Blue button
└──────────────────┘
```
- **Color**: Blue (#2563eb)
- **Icon**: Download arrow
- **Action**: Opens print dialog with filename `Victor_Tran_Resume.pdf`
- **Use case**: Primary export action

### ⚪ Print Button (Secondary)
```
┌──────────┐
│  🖨️ Print│  ← White button with border
└──────────┘
```
- **Color**: White with gray border
- **Icon**: Printer
- **Action**: Opens standard print dialog
- **Use case**: Physical printing or manual PDF save

## Desktop Layout

### Wide Screen (> 768px)
```
┌────────────────────────────────────────────────────────┐
│  Resume Builder                     [Save] [Print]  ←──┤ Fixed top-right
│                                                        │
│                                                        │
│                    VICTOR TRAN                         │
│         Software Developer | Integration Engineer     │
│                                                        │
│         Professional Summary                           │
│         Versatile and proactive...                     │
│                                                        │
│         Core Competencies                              │
│         • Boomi Integration Platform                   │
│         • Angular, React, TypeScript                   │
│                                                        │
│         [... more content ...]                         │
│                                                        │
└────────────────────────────────────────────────────────┘
```

## Mobile Layout

### Small Screen (≤ 768px)
```
┌────────────────────────────┐
│                            │
│  ┌──────────┐ ┌─────────┐ │ ← Buttons centered
│  │Save as   │ │  Print  │ │    below header
│  │   PDF    │ │         │ │
│  └──────────┘ └─────────┘ │
│                            │
│      VICTOR TRAN           │
│  Software Developer        │
│                            │
│  Professional Summary      │
│  Versatile and...          │
│                            │
│  [... content ...]         │
│                            │
└────────────────────────────┘
```

## Button States

### Normal State
```
┌──────────────────┐
│  📥 Save as PDF  │  (Blue with slight shadow)
└──────────────────┘
```

### Hover State
```
┌──────────────────┐
│  📥 Save as PDF  │  (Darker blue, lifts up slightly)
└──────────────────┘
     ↑ Animated lift effect
```

### Active/Click State
```
┌──────────────────┐
│  📥 Save as PDF  │  (Pressed down appearance)
└──────────────────┘
```

### Focus State (Keyboard Navigation)
```
┌──────────────────┐
│  📥 Save as PDF  │  (Blue focus ring)
└──────────────────┘
```

## User Flow

### Exporting to PDF

```
User on Resume Page
        │
        ├──→ Clicks "Save as PDF"
        │           │
        │           ↓
        │    Document title changes to
        │    "Victor_Tran_Resume"
        │           │
        │           ↓
        │    Print dialog opens
        │           │
        │           ↓
        │    Default: "Save as PDF"
        │    Suggested name: Victor_Tran_Resume.pdf
        │           │
        │           ├──→ User clicks "Save"
        │           │           │
        │           │           ↓
        │           │    PDF downloads
        │           │           │
        │           │           ↓
        │           │    Document title restored
        │           │           │
        │           │           ↓
        │           │    Success! ✅
        │           │
        │           └──→ User clicks "Cancel"
        │                       │
        │                       ↓
        │                Document title restored
        │                       │
        │                       ↓
        │                Back to resume page
        │
        └──→ Clicks "Print"
                    │
                    ↓
            Standard print dialog
                    │
                    ├──→ Print to printer
                    │
                    └──→ Or save as PDF
```

## Interaction Examples

### Example 1: Quick PDF Export
```
1. User opens http://localhost:4200
2. Resume loads with buttons visible in top-right
3. User clicks blue "Save as PDF" button
4. Print dialog appears
5. Filename shows: "Victor_Tran_Resume.pdf"
6. User clicks "Save"
7. PDF downloads to default folder
8. Done! ✅
```

### Example 2: Custom Settings
```
1. User clicks white "Print" button
2. Print dialog opens
3. User adjusts settings:
   - Changes margins to 0.5 inches
   - Adjusts scale to 95%
   - Enables headers
4. Selects "Save as PDF"
5. Changes filename to "Victor_Tran_Resume_Company.pdf"
6. Saves to custom folder
7. Done! ✅
```

## Print Preview

When print dialog opens, the preview shows:

```
┌─────────────────────────────────────┐
│  ┌───────────────────────────────┐  │
│  │                               │  │ ← No buttons visible!
│  │       VICTOR TRAN             │  │
│  │  Software Developer           │  │
│  │                               │  │
│  │  Professional Summary         │  │
│  │  [... content ...]            │  │
│  │                               │  │
│  │                               │  │
│  │                               │  │
│  │                               │  │
│  │                          1/1  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
      Clean, button-free PDF!
```

## Button Customization

### Change Button Position

Edit `resume.component.scss`:

```scss
.action-buttons {
  position: fixed;
  top: 20px;      // Change vertical position
  right: 20px;    // Change horizontal position
  
  // For bottom-right:
  // bottom: 20px;
  // top: auto;
  
  // For left side:
  // left: 20px;
  // right: auto;
}
```

### Change Button Size

```scss
.action-buttons button {
  padding: 12px 24px;  // Increase padding for larger buttons
  font-size: 14px;     // Increase font size
}
```

### Add More Buttons

Edit `resume.component.html`:

```html
<div class="action-buttons no-print">
  <button class="pdf-button" (click)="downloadPDF()">
    Save as PDF
  </button>
  <button class="print-button" (click)="saveAsPDF()">
    Print
  </button>
  
  <!-- Add new button -->
  <button class="email-button" (click)="emailResume()">
    📧 Email
  </button>
</div>
```

## Accessibility Features

### Keyboard Navigation
- **Tab**: Move between buttons
- **Enter/Space**: Activate button
- **Shift+Tab**: Move backwards

### Screen Reader Support
- Buttons have descriptive labels
- Icons include proper aria attributes
- Focus indicators visible

### Touch Support
- Large tap targets (48px minimum)
- No hover-only interactions
- Gesture-friendly spacing

## Tips & Tricks

### 💡 Pro Tip 1: Keyboard Shortcut
Even with buttons, you can still use `Ctrl/Cmd + P` to print directly.

### 💡 Pro Tip 2: Right-Click Option
Most browsers allow right-click → "Print" as an alternative.

### 💡 Pro Tip 3: Mobile Export
On mobile devices, buttons stack vertically for easy thumb access.

### 💡 Pro Tip 4: Filename Customization
You can change the filename in the print dialog before saving.

### 💡 Pro Tip 5: Preview Before Save
Always check the print preview to ensure everything looks correct.

## Common Questions

### Q: Can I hide the buttons?
**A:** Yes, remove the `.action-buttons` div from the HTML or add CSS `display: none;`

### Q: Why do I still need to select "Save as PDF"?
**A:** This uses the browser's native print API for best quality and ATS compatibility. Automatic PDF generation would require additional libraries.

### Q: Can I change the filename format?
**A:** Yes, edit the `generateFileName()` method in `resume.component.ts`

### Q: Do the buttons work on all browsers?
**A:** Yes, `window.print()` is supported by all modern browsers.

### Q: Can I add a share button?
**A:** Yes, you can add more buttons following the same pattern.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Buttons not visible | Check browser zoom level |
| Buttons appear in PDF | Verify `.no-print` class is present |
| Click doesn't work | Check browser console for errors |
| Wrong filename | Verify `generateFileName()` method |
| Mobile overlap | Adjust responsive breakpoint |

## Visual Design Specs

### Button Dimensions
- Height: 44px (48px with padding)
- Min-width: 120px
- Border-radius: 6px
- Gap between buttons: 12px

### Colors
- PDF Button: #2563eb (Blue 600)
- PDF Button Hover: #1d4ed8 (Blue 700)
- Print Button: #ffffff (White)
- Print Button Border: #d1d5db (Gray 300)
- Text: #ffffff (White) / #374151 (Gray 700)

### Typography
- Font: Arial, sans-serif
- Size: 14px
- Weight: 600 (Semi-bold)
- Letter spacing: Normal

### Shadows
- Normal: `0 2px 8px rgba(0, 0, 0, 0.15)`
- Hover: `0 4px 12px rgba(0, 0, 0, 0.2)`

---

**Ready to export?** Just click the blue "Save as PDF" button! 🚀

