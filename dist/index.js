"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_jsonschema_form_1 = __importDefault(require("react-jsonschema-form"));
const contributes_1 = __importDefault(require("@overlayed-app/contributes"));
class ContributesForm extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_jsonschema_form_1.default, { schema: this.getUpdatedSchema(), formData: this.props.data, onSubmit: this.props.complete }, this.props.children));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQXlCO0FBQ3pCLGtGQUF5QztBQUN6Qyw2RUFBb0Q7QUFjcEQsTUFBcUIsZUFBZ0IsU0FBUSxlQUFLLENBQUMsU0FBaUI7SUFLM0QsTUFBTTtRQUNYLE9BQU8sQ0FDTCw4QkFBQywrQkFBSyxJQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQVMsRUFDdEMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNoQixDQUNULENBQUE7SUFDSCxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLHFCQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFFcEUsTUFBTSxDQUFDLEdBQUc7WUFDUixJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRSxFQUEwQjtTQUN2QyxDQUFBO1FBRUQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNaLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNyQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsRUFBMEI7YUFDdkMsQ0FBQTtZQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQVEsRUFBRSxDQUFFLENBQUMsQ0FBQTtRQUM1RSxDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBMEIsQ0FBQTtRQUVoRCxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLENBQUE7SUFDVixDQUFDOztBQXRDTSw0QkFBWSxHQUFHO0lBQ3BCLFVBQVUsRUFBRSxFQUFFO0NBQ0ksQ0FBQTtBQUh0QixrQ0F3Q0MifQ==