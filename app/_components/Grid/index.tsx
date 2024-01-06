import { Bio } from "_components/Bio"
import { CaseStudy } from "_components/CaseStudy"
import { Map } from "_components/Map"
import { heights, layouts } from "_data/shared"
import { FilterType } from "_types/types"
import cn from "classnames"
import { useEffect, useState } from "react"
import styles from "./styles.module.scss"

import { BlogExcerpt } from "_components/BlogExcerpt"
import { Newsletter } from "_components/Newsletter"
import { Spotify } from "_components/Spotify"
import { Toggler } from "_components/Toggler"
import { Twitter } from "_components/Twitter"
import {
	WidthProvider,
	ResponsiveGridLayout as Responsive,
} from "react-grid-layout-next"

const ResponsiveGridLayout = WidthProvider(Responsive)

export const Grid = ({
	themeToggler,
	filter,
}: {
	themeToggler: () => void
	filter: FilterType
}) => {
	const [height, setHeight] = useState(280)
	const [isDraggable, setDraggable] = useState(true)
	const [isMounted, setMounted] = useState(false)

	useEffect(() => {
		if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
			setDraggable(false)
		}

		setTimeout(() => {
			setMounted(true)
		}, 500)
	}, [])

	const opacityValue = (section: string) =>
		filter === "all" || section === filter ? 1 : 0.25

	return (
		<div className={styles.container}>
			<ResponsiveGridLayout
				useCSSTransforms
				className={styles.layout}
				layouts={layouts[filter]}
				breakpoints={{
					lg: 1199,
					md: 799,
					sm: 374,
					xs: 319,
				}}
				cols={{
					lg: 4,
					md: 4,
					sm: 2,
					xs: 2,
				}}
				rowHeight={height}
				isBounded
				isDraggable={isDraggable}
				onBreakpointChange={(breakpoint: any) => {
					setHeight(heights[breakpoint])
				}}
				margin={[16, 16]}>
				<div
					key="bio"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("about"),
					}}>
					<Bio />
				</div>
				<div
					key="map"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("about"),
					}}>
					<Map />
				</div>
				<div
					key="recroot"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("projects"),
					}}>
					<CaseStudy
						bg="images/recroot-bg.svg"
						image="images/recroot.png"
						title="Recroot"
						href="/projects/recroot"
					/>
				</div>
				<div
					key="spotify"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("media"),
					}}>
					<Spotify />
				</div>
				<div
					key="twitter"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("about"),
					}}>
					<Twitter />
				</div>
				<div
					key="vouch-for"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("projects"),
					}}>
					<CaseStudy
						bg="images/vouch-for-bg.svg"
						image="images/vouch-for.png"
						title="Vouch For"
						href="/projects/vouch-for"
					/>
				</div>
				<div
					key="blog-excerpt"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("media"),
					}}>
					<BlogExcerpt />
				</div>
				<div
					key="wrap"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("projects"),
					}}>
					<CaseStudy
						bg="images/wrap-bg.svg"
						image="images/wrap.png"
						title="Wrap"
						href="/projects/wrap"
					/>
				</div>
				<div
					key="mode-toggle"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("other"),
					}}>
					<Toggler themeToggler={themeToggler} />
				</div>
				<div
					key="newsletter"
					className={cn(styles.itemGrab, styles.item)}
					style={{
						transitionDuration: isMounted ? "500ms" : "0ms",
						opacity: opacityValue("media"),
					}}>
					<Newsletter />
				</div>
			</ResponsiveGridLayout>
		</div>
	)
}
