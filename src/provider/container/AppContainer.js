import { Container } from 'unstated'
import immutable from 'immutability-helper'

export default class AppContainer extends Container {

    state = {
        tick : 1
    }

    addTick() {

        this.setState({ tick : ++this.state.tick })

    }

}