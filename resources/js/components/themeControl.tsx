
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/use-theme';



const ThemeControl = () => {
    const {theme, setTheme} = useTheme()
    
    const toggleTheme = (changeDark: boolean) => {
        setTheme((changeDark) ? 'dark' : 'light')
    }

    return(
        <div className="flex justify-center items-center space-x-2">
            <Switch id="chose-theme" onCheckedChange={toggleTheme} defaultChecked={(theme==='dark')}/>
            <Label htmlFor="chose-theme">Dark Mode</Label>
        </div>
    )
}

export default ThemeControl