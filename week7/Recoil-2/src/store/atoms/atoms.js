import axios from "axios";
import { atom, selector } from "recoil";

export const notificationAtom = atom({
    key: "notificationAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            await new Promise(r => setTimeout(r, 5000));
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
})


export const totalNotifiactionsSelector = selector({
    key: 'totalNotificationsSelector',
    get: ({ get }) => {
        const allNotifications = get(notificationAtom);
        return allNotifications.network + allNotifications.jobs, allNotifications.messaging;

    }
}) 