import ThemeForm from "../components/theme/ThemeForm";
import { mockThemeInputs } from "../mock/themeInputs";

export default function ThemesPage() {
    return (
        <div className="p-6">
            <ThemeForm
                inputs={mockThemeInputs}    
            />
        </div>
    );
}   