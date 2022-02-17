import 'react-reflex/styles.css'

import {
    ReflexContainer,
    ReflexSplitter,
    ReflexElement
} from 'react-reflex'


type InternalFlex = typeof ReflexContainer;

interface FlexInterface extends InternalFlex {
    Splitter: typeof ReflexSplitter;
    Element: typeof ReflexElement;
}

const Flex = ReflexContainer as FlexInterface

Flex.Element = ReflexElement
Flex.Splitter = ReflexSplitter

export default Flex