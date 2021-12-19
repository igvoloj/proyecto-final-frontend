export interface Carousel {
	/**
	 * enum ['none', 'simple', 'advanced']
	 */
	animation: string;
	autoPlay: boolean;
	/**
	 * label - a string representing the label of the item.
	content - a string representing the content of the item
	image - a string representing a url link to an image.
	HTMLcontent - a string representing some HTML structure taht will be generated inside the item.
	 */
	dataSource: any[];
	delay: number;
	disabled: boolean;
	disableItemClick: boolean;
	/**
	 *enum ['default', 'Multiple', 'Threed']
	 */
	displayMode: string;
	hideArrows: boolean;
	hideIndicators: boolean;
	interval: number;
	/**
	 * HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource
	 */
	itemTemplate: string;
	keyboard: boolean;
	loop: boolean;
	readonly: boolean;
	/**
	 * When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property.
	 */
	slideShow: boolean;
	/**
	 * Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled.
	 */
	swipe: boolean;
	/**
	 * Activates/deactivates slide navigation via mouse wheel. By default it's disabled.
	 */
	wheel: boolean;
	/**
	 * Navigates to the next slide.
	 */
	next(): void
	/**
	 * Pauses the slide show if slideShow is enabled.
	 */
	pause(): void
	/**
	 * Starts the slide show if slideShow is enabled.
	 */
	play(): void
	/**
	 * Navigates to the previous slide.
	 */
	prev(): void

	/**
	 *Navigates to a specific slide with the given index
	 * @param index The index of the item to be selected.
	 */
	slideTo(index: number): void



}
