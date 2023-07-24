<template>
    <div>
        <div class="container-xxl bg-white p-0">



            <!-- Navbar & Hero Start -->
            <div class="container-xxl position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href="/managerhome" class="navbar-brand p-0">
                        <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Cafein</h1>
                        <!-- <img src="img/logo.png" alt="Logo"> -->
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0 pe-4">
                            <a href="/managerhome" class="nav-item nav-link">Home</a>
                            <a href="/alltransaksi" class="nav-item nav-link">All Transaction</a>
                            <a href="/filtertransaksi" class="nav-item nav-link">Filter Transaction</a>
                            <a href="/profit" class="nav-item nav-link active">Profit</a>
                            <a href="#" @click="logout" class="nav-item nav-link">LogOut</a>
                        </div>
                        <a href="/managerhome" class="btn btn-primary py-2 px-4">Manager</a>
                    </div>
                </nav>

                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container text-center my-5 pt-5 pb-4">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Profit</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center text-uppercase">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Profit</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Navbar & Hero End -->


            <!-- Service Start -->
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="section-title ff-secondary text-center text-primary fw-normal">Transaction profit</h5>
                    </div>

                    <div class="row mt-3">
                        <div class="col">
                            <input type="date" class="form-control" v-model="cari_tgl">
                        </div>
                        <div class="col">
                            <input type="month" class="form-control" v-model="cari_bulan">
                        </div>
                        <div class="col">
                            <input type="submit" @click="getdate" class="btn btn-outline-primary">
                        </div>
                    </div>

                    <div class="card mt-4">
                        <div class="card-header">
                            Penghasilan
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" v-if="this.cari_bulan">Pendapatan bulan {{ cari_bulan }} Adalah Rp.{{
                                profitbulan }}</h5>
                            <p class="card-text" v-if="this.cari_tgl">Pendapatan Tanggal {{ cari_tgl }} Adalah Rp.{{
                                profithari }}</p>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Service End -->

            <div style="width: 300px; height: 300px; margin: 0px 40% 0px;" class="mt-4">
                <canvas id="piechart" width="300" height="300"></canvas>
            </div>


            <!-- Footer Start -->
            <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                            <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contact Us</a>
                            <a class="btn btn-link" href="">Reservation</a>
                            <a class="btn btn-link" href="">Privacy Policy</a>
                            <a class="btn btn-link" href="">Terms & Condition</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                            <h5 class="text-light fw-normal">Monday - Saturday</h5>
                            <p>09AM - 09PM</p>
                            <h5 class="text-light fw-normal">Sunday</h5>
                            <p>10AM - 08PM</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative mx-auto" style="max-width: 400px;">
                                <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Your email">
                                <button type="button"
                                    class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                                <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                                Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br><br>
                                Distributed By <a class="border-bottom" href="https://themewagon.com"
                                    target="_blank">ThemeWagon</a>
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End -->

            <!-- DETAIL -->
            <div class="modal fade" id="detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">DETAIL</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <!-- <table class="table table-hover table-striped">
                                <thead class="bg-light text dark">
                                    <tr>
                                        <th>No</th>
                                        <th>Menu</th>
                                        <th>Jumlah</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(t, nomor) in detail" :key="nomor">
                                        <td>{{ nomor + 1 }}</td>
                                        <td>{{ t.nama }}</td>
                                        <td>{{ t.total_pesanan }}</td>
                                        <td>{{ t.total_harga }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Total Harga: <b>{{ total }}</b></p> -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END DETAIL -->

            <!-- Back to Top -->
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'
import Chart from 'chart.js/auto'
// import axios from 'axios'
// import { filter } from 'vue/types/umd';
// import { filter } from 'vue/types/umd'

export default {
    data() {
        return {
            cari_bulan: '',
            cari_tgl: '',
            profitbulan: '',
            profithari: '',
            datamenu: {}
        }
    },
    mounted() {
        this.getdate()
        axios.get('http://localhost:8000/api/getmenu')
            .then(
                (response) => {
                    console.log(response)
                    const data = response.data.map(item => item.jumlah_pesan)
                    const nama = response.data.map(item => item.nama)

                    let colors = []
                    for (let i = 0; i < data.length; i++) {
                        let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
                        colors.push(color)
                    }

                    const chartData = {
                        labels: nama,
                        datasets: [{
                            data: data,
                            backgroundColor: colors
                        }]
                    }


                    new Chart(document.getElementById('piechart'), {
                        type: 'pie',
                        labels: 'Data Menu',
                        data: chartData,
                        options: {
                            responsive: true
                        }
                    })
                })
            .catch(
                err => {
                    console.log(err)
                }
            )
    },
    computed: {
    },
    methods: {
        getdate() {
            if (this.cari_bulan) {
                axios.get('http://localhost:8000/api/getmonth/' + this.cari_bulan)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.profitbulan = data
                        }
                    )
            }

            if (this.cari_tgl) {
                axios.get('http://localhost:8000/api/getday/' + this.cari_tgl)
                    .then(
                        ({ data }) => {
                            console.log(data)
                            this.profithari = data
                        }
                    )
            }

            // if (this.cari_bulan && this.cari_tgl) {
            //     swal({
            //         icon: 'warning',
            //         title: 'Cari salah satu!',
            //         button: true
            //     })
            // }
        },
        logout() {
            swal({
                icon: 'warning',
                title: 'Ingin Log Out?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        localStorage.removeItem('role')
                        localStorage.removeItem('token')
                        swal({
                            icon: 'success',
                            button: false
                        })
                        setTimeout(() => {
                            location.href = '/loginpage'
                        }, 1200);
                    }
                }
            )
        }
    }
}
</script>