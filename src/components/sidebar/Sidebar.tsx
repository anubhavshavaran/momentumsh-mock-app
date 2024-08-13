import Logo from "../Logo";
import hamburger from "./../../assets/icons/Hamburger.png";
import history from "./../../assets/icons/History.png";
import stack from "./../../assets/icons/Stack.png";
import git from "./../../assets/icons/Git.png";
import SidebarButton from "./SidebarButton";
import user from "./../../assets/icons/User.png";

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div>
                <Logo />
                <div className="pt-8 flex flex-col justify-center items-center gap-6">
                    <SidebarButton
                        logo={{
                            source: hamburger,
                            altText: 'hamburger'
                        }}
                        onClick={() => console.log('hamburger clicked')}
                    />
                    <SidebarButton
                        logo={{
                            source: history,
                            altText: 'history'
                        }}
                        onClick={() => console.log('hamburger clicked')}
                    />
                    <SidebarButton
                        logo={{
                            source: stack,
                            altText: 'stack'
                        }}
                        onClick={() => console.log('hamburger clicked')}
                    />
                    <SidebarButton
                        logo={{
                            source: git,
                            altText: 'git'
                        }}
                        onClick={() => console.log('hamburger clicked')}
                    />
                </div>
            </div>
            <img src={user} alt="user image" className="w-[35px]" />
        </div>
    );
}
