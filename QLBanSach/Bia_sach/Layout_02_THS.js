import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
export default function MauApp() {
    return (
        <div>
            <div className='container' style={{ width: '65%' }}>
                <button className="btn btn-primary my-3"> Thêm sinh viên </button>
                <div className="card">
                    <div className="card-header bg-primary text-white text-center"><h3>QUẢN LÝ DANH SÁCH SINH VIÊN</h3></div>
                    <div className="card-body">
                        <table className="table table-bordered" style={{ verticalAlign: 'middle' }}>
                            <thead style={{ textAlign: 'center' }}>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ tên</th>
                                    <th>Học bỗng</th>
                                    <th>Giới tính</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ paddingTop: '20px', textAlign: 'center' }}>1</td>
                                    <td style={{ paddingTop: '20px' }}>Trần Văn Tuấn</td>
                                    <td style={{ paddingTop: '20px' }}>250000</td>
                                    <td style={{ paddingTop: '20px' }}><span className="bagde badge-warning">Nam</span></td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button type="button" className="btn btn-primary mr-2">
                                            Sửa
                                        </button>
                                        <button type="button" className="btn btn-danger">Xoá
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingTop: '20px', textAlign: 'center' }}>2</td>
                                    <td style={{ paddingTop: '20px' }}>Nguyễn Thị Lan</td>
                                    <td style={{ paddingTop: '20px' }}>300000</td>
                                    <td style={{ paddingTop: '20px' }}><span className="bagde badge-warning">Nữ</span></td>
                                    <td style={{ textAlign: 'center' }}>
                                        <button type="button" className="btn btn-primary mr-2">
                                            Sửa
                                        </button>
                                        <button type="button" className="btn btn-danger">Xoá
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Form thêm (sửa) sản phẩm */}
            <div className="container mt-3" style={{ width: '40%' }}>
                <div className="card">
                    <div className="card-header bg-primary text-white text-center"><h3>SỬA SINH VIÊN</h3></div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>Họ tên</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập họ tên sinh viên"
                                    value="Trần Văn Tuấn"
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>Học bỗng</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập học bỗng"
                                    value="250000"
                                />
                            </div>
                            <div className="form-group">
                                <label style={{ fontWeight: 'bold' }}>Giới tính</label>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" checked={true}/>
                                    <label className="form-check-label"> Nam </label>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary mr-2">Lưu sinh viên</button>
                                <button className="btn btn-primary">Trở về</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
