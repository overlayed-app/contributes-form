"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_jsonschema_form_1 = __importDefault(require("react-jsonschema-form"));
const contributes_1 = __importDefault(require("@overlayed-app/contributes"));
class ContributesForm extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            schema: this.getUpdatedSchema()
        };
    }
    componentDidUpdate() {
        this.setState({
            schema: this.getUpdatedSchema()
        });
    }
    render() {
        return (react_1.default.createElement(react_jsonschema_form_1.default, { schema: this.state.schema, formData: this.props.data, onSubmit: this.props.complete }, this.props.children));
    }
    getUpdatedSchema() {
        const s = this.props.sources.map(source => contributes_1.default.from(source));
        const d = {
            type: 'object',
            properties: {}
        };
        s.forEach(e => {
            d.properties[e.name] = {
                type: 'object',
                properties: {}
            };
            e.data.forEach(dd => d.properties[e.name].properties[dd.name] = Object.assign({}, dd));
        });
        const rs = this.props.rawSources;
        rs.forEach(r => {
            d.properties[r.name] = r;
        });
        return d;
    }
}
ContributesForm.defaultProps = {
    rawSources: []
};
exports.default = ContributesForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQXlCO0FBQ3pCLGtGQUF5QztBQUN6Qyw2RUFBb0Q7QUFjcEQsTUFBcUIsZUFBZ0IsU0FBUSxlQUFLLENBQUMsU0FBZ0M7SUFLakYsWUFBYSxLQUFhO1FBQ3hCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUVaLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1NBQ2hDLENBQUE7SUFDSCxDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1NBQ2hDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxDQUNMLDhCQUFDLCtCQUFLLElBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2hCLENBQ1QsQ0FBQTtJQUNILENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMscUJBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUVwRSxNQUFNLENBQUMsR0FBRztZQUNSLElBQUksRUFBRSxRQUFRO1lBQ2QsVUFBVSxFQUFFLEVBQTBCO1NBQ3ZDLENBQUE7UUFFRCxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1osQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQ3JCLElBQUksRUFBRSxRQUFRO2dCQUNkLFVBQVUsRUFBRSxFQUEwQjthQUN2QyxDQUFBO1lBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBUSxFQUFFLENBQUUsQ0FBQyxDQUFBO1FBQzVFLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUEwQixDQUFBO1FBRWhELEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDYixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsQ0FBQTtJQUNWLENBQUM7O0FBcERNLDRCQUFZLEdBQUc7SUFDcEIsVUFBVSxFQUFFLEVBQUU7Q0FDSSxDQUFBO0FBSHRCLGtDQXNEQyJ9