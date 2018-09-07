import { VisionComponent } from './general/vision/vision.component';
import { AccessibilityComponent } from './general/accessibility/accessibility.component';
import { Page, Pages } from '../commons/page/page.model';
import { TypographyPrinciplesComponent } from './general/typography/typography.component';
import { EmptyStatesPrinciplesComponent } from './components/empty-states/empty-states.component';
import { NavigationPrinciplesComponent } from './components/navigation/navigation.component';
import { CardsPrinciplesComponent } from './components/cards/cards.component';
import { ActionsPrinciplesComponent } from './general/actions/actions-principles.component';
import { FormGuidelinesPrinciplesComponent } from './general/form-guidelines/form-guidelines.component';
import { TablesPrinciplesComponent } from './components/tables/tables.component';
import { OverlayPrinciplesComponent } from './general/overlay/overlay.component';


const generalPrinciplesGroup = new Page('general', null, 'Principes généraux');
const typographyPage = new Page('typography', TypographyPrinciplesComponent, 'Typographie', generalPrinciplesGroup);
const actionsPrinciplesPage = new Page('actions', ActionsPrinciplesComponent, 'Actions & Boutons', generalPrinciplesGroup);
const formPrinciplesPage = new Page('form', FormGuidelinesPrinciplesComponent, 'Formulaires', generalPrinciplesGroup);
const overlayPrinciplesPage = new Page('overlay', OverlayPrinciplesComponent, 'Modales & Side-panels', generalPrinciplesGroup);
// const visionPage = new Page('vision', VisionComponent, 'Vision', generalPrinciplesGroup);
// const accessibilityPage = new Page('accessibility', AccessibilityComponent, 'Accessibilité', generalPrinciplesGroup);

const componentsPrinciplesGroup = new Page('components', null, 'Principes par composant');
const emptyStatePrinciplesPage = new Page('empty-states', EmptyStatesPrinciplesComponent, 'Empty states', componentsPrinciplesGroup);
const navigationPrinciplesPage = new Page('navigation', NavigationPrinciplesComponent, 'Menu principal', componentsPrinciplesGroup);
const cardsPrinciplesPage = new Page('cards', CardsPrinciplesComponent, 'Cartes', componentsPrinciplesGroup);
const tablesPrinciplesPage = new Page('tables', TablesPrinciplesComponent, 'Tableaux', componentsPrinciplesGroup);


export const principlesPages: Pages = new Pages('principles', [
	generalPrinciplesGroup,
	typographyPage,
	actionsPrinciplesPage,
	formPrinciplesPage,
	overlayPrinciplesPage,
	// visionPage,
	// accessibilityPage,

	componentsPrinciplesGroup,
	emptyStatePrinciplesPage,
	navigationPrinciplesPage,
	cardsPrinciplesPage,
	tablesPrinciplesPage
], typographyPage);
