import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";
import Nav from './Nav';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';

const useScroll = () => {
	const [scrollY, setScrollY] = useState<number>(0);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	}

	const delay = 15;

	useEffect(() => {
		window.addEventListener('scroll', debounce(handleScroll, delay));
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return {scrollY};
}

const useRefScroll = () =>{
	const scrollRef = useRef<HTMLDivElement>(null);
	const onMoveToElement = () => {
		scrollRef.current?.scrollIntoView({behavior: 'smooth'});
	};
	return {scrollRef, onMoveToElement};
}


function Content(){
	const scrollY = useScroll();
	const nav = {
		0: useRefScroll(),
		1: useRefScroll(),
		2: useRefScroll(),
		3: useRefScroll(),
	};
	return(
		<>
			<Nav scrollY={scrollY} toElement={nav} />
			<Section1 scrollRef={nav[0].scrollRef} />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 scrollRef={nav[1].scrollRef} />
			<Section6 scrollRef={nav[2].scrollRef} />
			<Section7 scrollRef={nav[3].scrollRef} />
			<Section8 />
		</>
	)
}

export default Content;