import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.error = function() {}
configure({ adapter: new Adapter() });
