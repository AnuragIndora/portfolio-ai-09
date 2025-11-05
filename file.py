import os

# List of UI component files
ui_files = [
    "accordion.tsx",
    "alert-dialog.tsx",
    "alert.tsx",
    "aspect-ratio.tsx",
    "avatar.tsx",
    "badge.tsx",
    "breadcrumb.tsx",
    "button.tsx",
    "calendar.tsx",
    "card.tsx",
    "carousel.tsx",
    "chart.tsx",
    "checkbox.tsx",
    "collapsible.tsx",
    "command.tsx",
    "context-menu.tsx",
    "dialog.tsx",
    "drawer.tsx",
    "dropdown-menu.tsx",
    "form.tsx",
    "hover-card.tsx",
    "input-otp.tsx",
    "input.tsx",
    "label.tsx",
    "menubar.tsx",
    "navigation-menu.tsx",
    "pagination.tsx",
    "popover.tsx",
    "progress.tsx",
    "radio-group.tsx",
    "resizable.tsx",
    "scroll-area.tsx",
    "select.tsx",
    "separator.tsx",
    "sheet.tsx",
    "sidebar.tsx",
    "skeleton.tsx",
    "slider.tsx",
    "sonner.tsx",
    "switch.tsx",
    "table.tsx",
    "tabs.tsx",
    "textarea.tsx",
    "toast.tsx",
    "toaster.tsx",
    "toggle-group.tsx",
    "toggle.tsx",
    "tooltip.tsx",
    "use-toast.ts"
]

# Change this path to your ui folder location
ui_folder = r"C:\\Users\\anura\\OneDrive\\Desktop\\Portfolio\\src\\components\\ui"

# Create the folder if it doesn't exist
os.makedirs(ui_folder, exist_ok=True)

# Create empty files
for file_name in ui_files:
    file_path = os.path.join(ui_folder, file_name)
    open(file_path, 'a').close()

print(f"All UI files created in {ui_folder}")
