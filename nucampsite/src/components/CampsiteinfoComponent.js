class Campsiteinfo {
    constructor(props) {
        super(props);
    }
    render() {
        if (campsite) {
            return (
                <div class="row">
                </div>
            );
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default Campsiteinfo;