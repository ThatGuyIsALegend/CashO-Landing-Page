import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { siInstagram } from "simple-icons";

const components: { title: string; href: string; description: string }[] = [
    { title: "Home", href: "/", description: "Home" },
    { title: "About", href: "/about", description: "About" },
    { title: "Contact", href: "/contact", description: "Contact" },
];

export default function Navbar() {
    return (
        <div className="flex justify-between py-4 px-24 sticky top-0 z-50 backdrop-blur items-center">
            <img src="./a" alt="" />
            <NavigationMenu>
                <NavigationMenuList>
                    {components.map((component) => (
                        <NavigationMenuItem key={component.title}>
                            <NavigationMenuLink href={component.href}>
                                {component.title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex">
                <Button size="icon" variant="outline">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d={siInstagram.path} />
                    </svg>
                </Button>
            </div>
        </div>
    );
}
