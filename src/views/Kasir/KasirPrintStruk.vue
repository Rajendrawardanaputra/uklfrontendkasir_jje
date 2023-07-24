<template>
    <div class="body bagian-print">
        <div id="nota" class="mt-3">
            <div>

                <b>Cafein</b><br>
                <small>Jalan muhartoooo <br> sosial media : @Afternoon Cafein <br>
                <span style="text-decoration: underline; color: blue; cursor: pointer;" @click="print()" class="bagian-nonprint">Print</span>
                </small>


                <div class="container">
                    <table class="mt-3 table table-hover table-striped">
                        <thead>
                            <tr class="bg-light text-dark">
                                <td>No</td>
                                <td>Menu</td>
                                <td>Jumlah</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, nomor) in data_transaksi" :key="nomor">
                                <td>{{ nomor + 1 }}</td>
                                <td>{{ data.nama }}</td>
                                <td>{{ data.total_pesanan }}</td>
                                <td>{{ data.total_harga }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="note">
                    <b>Perhatian..!</b><br>
                    <small>
                        Barang-barang yang sudah dipesan <br>
                        tidak dapat di ajukan
                    </small>
                </div>
                <!-- <p style="position: absolute;">print</p> -->
            </div>
        </div>
    </div>
</template>

<style scoped>

@media print {
    .bagian-print{
        display: block !important;
    }

    .bagian-nonprint{
        display: none !important;
    }
}

#nota {
    width: 10cm;
      height: 15cm;
      background-color: #ffffff;
      border: 1px solid #000000;
}

.body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

.note {
    margin-left: 4%;
    margin-right: 35%;
    margin-top: 65%;
    border: 1px solid black;
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            data_transaksi: {}
        }
    },
    mounted() {
        this.getdata(this.$route.params.id)
        console.log('ttes')
    },
    methods: {
        getdata(id) {
            axios.get('http://localhost:8000/api/gethistory/' + id)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.data_transaksi = data
                    }
                )
        },
        print(){
            window.print()
            setTimeout(() => {
                location.href = '/kasirhome'
            }, 1200);
        }
    }
}
</script>