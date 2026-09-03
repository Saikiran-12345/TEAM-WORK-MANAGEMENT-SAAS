import os

def fix_file(filepath):
    # Try reading as cp1252 (or utf-8 with bom) and rewriting as pure utf-8
    try:
        with open(filepath, "r", encoding="utf-8-sig") as f:
            content = f.read()
    except UnicodeDecodeError:
        with open(filepath, "r", encoding="cp1252") as f:
            content = f.read()
            
    with open(filepath, "w", encoding="utf-8", newline="\n") as f:
        f.write(content)

fix_file(r"D:\company_projects\1-9-26\TEAM WORK MANAGEMENT SAAS\src\pages\ProjectsView.tsx")
fix_file(r"D:\company_projects\1-9-26\TEAM WORK MANAGEMENT SAAS\src\pages\TeamsView.tsx")
fix_file(r"D:\company_projects\1-9-26\TEAM WORK MANAGEMENT SAAS\src\pages\manager\ManagerDashboard.tsx")
fix_file(r"D:\company_projects\1-9-26\TEAM WORK MANAGEMENT SAAS\src\components\layout\Layout.tsx")
fix_file(r"D:\company_projects\1-9-26\TEAM WORK MANAGEMENT SAAS\src\pages\auth\Login.tsx")
fix_file(r"D:\company_projects\1-9-26\TEAM WORK MANAGEMENT SAAS\src\data\seed.ts")

print("Files fixed.")
