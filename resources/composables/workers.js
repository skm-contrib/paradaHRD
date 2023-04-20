import { ref } from "vue"
import axios from 'axios'
import { useRouter } from "vue-router"
import { useStore } from 'vuex'

export default function useWorkers() {

    const workers = ref([]);
    const worker = ref([]);
    const errors = ref({})
    const router = useRouter()
    const store = useStore()

    const getWorkers = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/workers");
        workers.value = response.data.data;
        return workers
    };

    const getWorker = async (id) => {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/workers/" + id);
        worker.value = response.data.data;
    };

    const storeWorker = async (data) => {
        try {
            await axios.post("http://127.0.0.1:8000/api/v1/workers", data);
            await router.push({ name: "WorkerIndex" });

        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateWorker = async (id) => {
        try {
            await axios.put("http://127.0.0.1:8000/api/v1/workers/" + id, worker.value);
            await router.push({ name: "WorkerIndex" });
            await router.push({ name: 'WorkerWatch', params: { id: id } });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    }

    const authWorker = async (data) => {
        getWorkers();

        workers.value.forEach(worker => {
            if (data.login == worker.name || data.login == worker.phone_number || data.login == worker.mail) {
                if (data.password == worker.password) {
                    store.commit('CHANGE_UID', worker.id)
                    if (worker.post == 'Працівник відділу кадрів') {
                        router.push({ name: "WorkerIndex" });
                    }
                    else {
                        router.push({ name: 'WorkerCard', params: { id: worker.id } });
                    }
                }
            }
        });

    }

    const logout = async () => {
        store.commit('CHANGE_UID', 0)
        router.push('/');
    }

    const addSalary = async (data, id) => {
        worker.value.salary = data;
        await router.push({ name: "WorkerIndex" });
        await axios.put("http://127.0.0.1:8000/api/v1/workers/" + id, worker.value);
        await router.push({ name: 'WorkerWatch', params: { id: id } });
    }

    const addVacation = async (vacationData, sickStatus, id) => {
        worker.value.vacation = vacationData;
        worker.value.sick = sickStatus;
        await router.push({ name: "WorkerIndex" });
        await axios.put("http://127.0.0.1:8000/api/v1/workers/" + id, worker.value);
        await router.push({ name: 'WorkerWatch', params: { id: id } });
    }

    const updatePassword = async (newPassword, id) => {
        worker.value.password = newPassword;
        await router.push({ name: "WorkerIndex" });
        await axios.put("http://127.0.0.1:8000/api/v1/workers/" + id, worker.value);
        await router.push({ name: 'WorkerWatch', params: { id: id } });
    }

    const removeVacation = async (id) => {
        worker.value.vacation = '';
        worker.value.sick = false;
        await router.push({ name: "WorkerIndex" });
        await axios.put("http://127.0.0.1:8000/api/v1/workers/" + id, worker.value);
        await router.push({ name: 'WorkerWatch', params: { id: id } });
    }

    const destroyWorker = async (id) => {
        if (!window.confirm("Ви впевнені що збираєтесь видалити цього працівника,?")) {
            return;
        }
        await axios.delete("http://127.0.0.1:8000/api/v1/workers/" + id);
        await router.push({ name: "WorkerIndex" });
        await getWorkers();
    }

    return {
        worker,
        workers,
        getWorker,
        authWorker,
        getWorkers,
        updateWorker,
        addVacation,
        updatePassword,
        logout,
        addSalary,
        storeWorker,
        destroyWorker,
        removeVacation,
        errors,
    }
}
