// flip-h/v, rotate 90/180(other degrees to be add later), shrea
// scale up/down
import imgObj from '../../common/imgObj'
import React, {Component} from 'react';
import icons from './buttonIcons';

export default class Rotate extends Component {
  constructor(props) {
    super(props);
    this.wasm_img = imgObj.get_wasm_img();
    this.state = {
      //selected
    }
  }

  /*
  componentDidMount = () => {};
  componentDidUpdate = prevProps => { };
  */

  // rotate 90 is an reversible operation, no need to call it in onClick handler,
  // I don't even bother adding an 'apply' button,
  // just apply the changes before unmount.
  componentWillUnmount = () => {
    this.wasm_img.apply_change();
  };

  onClick = evt => {
    switch (evt.target.id) {
      case 'btn_rotate_counter_clockwise': this.wasm_img.rotate(false); break;
      case 'btn_rotate_clockwise': this.wasm_img.rotate(true); break;
      case 'btn_flip_h': this.wasm_img.flip_h(); break;
      case 'btn_flip_v': this.wasm_img.flip_v(); break;
    }
    this.props.redraw()
  };

  render() {
    return (
        <div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <button className='editor-btn' id='btn_rotate_counter_clockwise' onClick={this.onClick}>
              {icons.rotate_counter_clockwise}
            </button>
            <button className='editor-btn' id="btn_rotate_clockwise" onClick={this.onClick}>
              {icons.rotate_clockwise}
            </button>
            <button className='editor-btn' id="btn_flip_h" onClick={this.onClick}>
              {icons.flip_horizontal}
            </button>
            <button className='editor-btn' id="btn_flip_v" onClick={this.onClick}>
              {icons.flip_vertical}
            </button>
          </div>
        </div>
    )}
}
