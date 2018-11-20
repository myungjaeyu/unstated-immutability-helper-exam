import { Container } from 'unstated'
import immutable from 'immutability-helper'

export default class AppContainer extends Container {

    state = {
        board : {
            content : {
                title : 'title'
            }
        },
        tick : 1
    }

    addTick() {

        this.setState({ tick : ++this.state.tick })

    }

    setTitle(title) {

        this.setState(immutable(this.state, {
            board : {
                content : {
                    title : {
                        $set : title
                    }
                }
            }
        }))

    }

}