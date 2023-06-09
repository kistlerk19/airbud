import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import DropMenu from './DropMenu';

const Navbar = () => {
    return (
        <div className="fixed z-10 w-full bg-white shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <DropMenu />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;