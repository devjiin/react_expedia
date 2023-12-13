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
	const onMoveToElement = (idx:number) => {
		scrollRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
	};
	console.log(scrollRef.current);
	return {scrollRef, onMoveToElement};
}



function Content(){
	const {scrollRef , onMoveToElement} = useRefScroll();
	// const sec1Offset = scrollRef.current.offsetTop;
	const scrollY = useScroll();
	return(
		<>
			<Nav scrollY={scrollY} onMoveToElement={onMoveToElement} />
			<Section1 scrollRef={scrollRef} />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 scrollRef={scrollRef} />
			<Section6 scrollRef={scrollRef}/>
			<Section7 />
			<Section8 />
		</>
	)
}

export default Content;