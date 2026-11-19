"use client";

import Image from "next/image";
import { motion, type MotionStyle } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import s from "./LinkedDevices.module.css";

/*
 * A recreation of two real Suki apps with sample data: the Suki Perks customer app (phone)
 * and the Suki Business merchant console (browser). Labels, statuses, badge colours, and the
 * points rule (₱100 spent = 1 point) follow the Suki code. Stage is driven by the caller (scroll).
 *   0 checkout · 1 placing · 2 order lands in the console · 3 store accepts, customer sees it
 */

export type Stage = 0 | 1 | 2 | 3;
type Status = "new" | "accepted" | "ready" | "completed";

const STORE = "Lola’s Bakeshop";
const PESOS_PER_POINT = 100;
const BASKET = { item: "Ensaymada box", qty: "Box of 6", total: 245 };
const BASE = { sales: 4820, orders: 37, customers: 9 };
const NEW_ID = 1042;

const SEED = [
  { id: 1041, customer: "Paolo R.", total: 680, status: "accepted" as Status, minutes: 6 },
  { id: 1040, customer: "Grace L.", total: 180, status: "ready" as Status, minutes: 18 },
  { id: 1039, customer: "Jun D.", total: 320, status: "completed" as Status, minutes: 34 },
  { id: 1038, customer: "Ana M.", total: 455, status: "completed" as Status, minutes: 52 },
];

const STATUS_LABEL: Record<Status, string> = { new: "New", accepted: "Preparing", ready: "Ready", completed: "Completed" };
const TRACK = ["Order placed", "Preparing", "Ready", "On the way"];

function peso(amount: number) {
  const [whole, cents] = amount.toFixed(2).split(".");
  return `₱${whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${cents}`;
}

type Props = { stage: Stage; browserStyle?: MotionStyle; phoneStyle?: MotionStyle; className?: string };

export default function LinkedDevices({ stage, browserStyle, phoneStyle, className }: Props) {
  const placed = stage >= 2;
  const accepted = stage >= 3;
  const sales = BASE.sales + (placed ? BASKET.total : 0);
  const orders = placed
    ? [{ id: NEW_ID, customer: "Maria S.", total: BASKET.total, status: (accepted ? "accepted" : "new") as Status, minutes: 0 }, ...SEED.slice(0, 3)]
    : SEED;
  const metrics = [
    { title: "Sales Today", value: peso(sales), desc: "Gross revenue today", icon: "wallet" as const },
    { title: "Total Orders", value: String(BASE.orders + (placed ? 1 : 0)), desc: "Completed transactions", icon: "receipt" as const },
    { title: "Rewards Issued", value: `${(sales / PESOS_PER_POINT).toFixed(0)} pts`, desc: "Loyalty points given", icon: "star" as const },
    { title: "New Customers", value: String(BASE.customers + (placed ? 1 : 0)), desc: "Unique buyers today", icon: "plus" as const },
  ];
  const trackDone = accepted ? 2 : placed ? 1 : 0;

  return (
    <div className={cn(s.root, className)}>
      <div
        className={s.stage}
        role="img"
        aria-label="Illustration with sample data: an order placed in the Suki customer app on a phone appears in the Suki Business merchant console, and the store's acceptance shows up back on the phone."
      >
        {/* Browser: Suki Business merchant console */}
        <motion.div className={s.browser} style={browserStyle}>
          <div className={s.chrome}>
            <span className={s.dot} />
            <span className={s.dot} />
            <span className={s.dot} />
            <span className={s.tab}>
              <Image src="/assets/suki/logo.png" alt="" width={24} height={24} className={s.tabIcon} />
              Suki Business
            </span>
          </div>
          <div className={s.console}>
            <aside className={s.sidebar}>
              <Image src="/assets/suki/logo.png" alt="" width={48} height={48} className={s.sideLogo} />
              <span className={cn(s.sideItem, s.sideActive)}><Icon name="home" /></span>
              <span className={s.sideItem}><Icon name="receipt" /></span>
              <span className={s.sideItem}><Icon name="box" /></span>
              <span className={s.sideItem}><Icon name="star" /></span>
              <span className={s.sideItem}><Icon name="wallet" /></span>
              <span className={s.sideItem}><Icon name="chat" /></span>
            </aside>
            <div className={s.main}>
              <div className={s.head}>
                <div>
                  <div className={s.kicker}>Welcome back,</div>
                  <div className={s.store}>{STORE}</div>
                </div>
                <span className={s.newOrder}><Icon name="receipt" /> New Order</span>
              </div>

              <div className={s.dash}>
                <div>
                  <div className={s.metrics}>
                    {metrics.map((m) => (
                      <div key={m.title} className={s.metric}>
                        <div className={s.metricTop}>
                          {m.title}
                          <Icon name={m.icon} />
                        </div>
                        <span key={m.value} className={cn(s.metricValue, placed && s.flash)}>{m.value}</span>
                        <span className={s.metricDesc}>{m.desc}</span>
                      </div>
                    ))}
                  </div>

                  <div className={s.orders}>
                    <div className={s.ordersHead}>
                      <span className={s.ordersTitle}>Recent Orders</span>
                      <span className={s.viewAll}>View All</span>
                    </div>
                    <div className={s.rowHead}>
                      <span>Order</span>
                      <span>Customer</span>
                      <span>Total</span>
                      <span>Status</span>
                    </div>
                    {orders.map((o) => (
                      <div key={o.id} className={cn(s.row, o.id === NEW_ID && s.fresh)}>
                        <span className={s.rowId}>#{o.id}</span>
                        <span className={s.rowName}>{o.customer}</span>
                        <span>{peso(o.total)}</span>
                        {o.id === NEW_ID && !accepted ? (
                          <span className={cn(s.accept, stage === 2 && s.pressed)}>Accept</span>
                        ) : (
                          <span key={o.status} className={cn(s.status, s[`s-${o.status}`], o.id === NEW_ID && s.statusIn)}>
                            {STATUS_LABEL[o.status]}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={s.notes}>
                  <div className={s.notesHead}>
                    <Icon name="bell" /> Notifications
                    {placed && <span className={s.badge}>1</span>}
                  </div>
                  <ul className={s.noteList}>
                    {orders.slice(0, 3).map((o) => (
                      <li key={o.id} className={cn(s.note, o.id === NEW_ID && s.fresh)}>
                        <span className={s.noteTitle}>New order #{o.id}</span>
                        <span className={s.noteMeta}>{o.customer}, {peso(o.total)}</span>
                        <span className={s.noteTime}>{o.minutes === 0 ? "Just now" : `${o.minutes} min ago`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phone: Suki Perks customer app */}
        <motion.div className={s.phone} style={phoneStyle}>
          <div className={s.screen}>
            <span className={s.island} />
            <div className={s.sukiHead}>
              <Icon name="chevronLeft" />
              <div>
                <div className={s.sukiKicker}>{STORE}</div>
                <div className={s.sukiTitle}>{placed ? "Order status" : "Checkout"}</div>
              </div>
            </div>

            {placed ? (
              <div className={s.done}>
                <span className={s.check}><Icon name="check" strokeWidth={2.4} /></span>
                <span className={s.successTitle}>{accepted ? "Being prepared" : "Order placed"}</span>
                <span className={s.successPoints}>+{(BASKET.total / PESOS_PER_POINT).toFixed(2)} Suki points</span>
                <div className={s.receipt}>
                  <div className={s.line}>
                    <span>Order</span>
                    <strong>#{NEW_ID}</strong>
                  </div>
                  <div className={s.line}>
                    <span>Total</span>
                    <strong>{peso(BASKET.total)}</strong>
                  </div>
                </div>
                <ol className={s.tracker}>
                  {TRACK.map((step, index) => (
                    <li key={step} className={cn(s.trackStep, index < trackDone && s.trackDone)}>
                      <span className={s.trackDot} />
                      {step}
                    </li>
                  ))}
                </ol>
                <span className={s.successNote}>{accepted ? `${STORE} accepted your order.` : `${STORE} has your order.`}</span>
              </div>
            ) : (
              <div className={s.body}>
                <span className={s.sectionLabel}>Your order</span>
                <div className={s.item}>
                  <span className={s.thumb}><Icon name="box" /></span>
                  <span>
                    <span className={s.itemName}>{BASKET.item}</span>
                    <br />
                    <span className={s.itemQty}>{BASKET.qty}</span>
                  </span>
                  <span className={s.price}>{peso(BASKET.total)}</span>
                </div>
                <span className={s.sectionLabel}>Delivery</span>
                <div className={s.line}>
                  <span>Courier</span>
                  <strong>Suki Rider</strong>
                </div>
                <div className={s.line}>
                  <span>Deliver to</span>
                  <strong>Brgy. San Pedro</strong>
                </div>
                <span className={s.sectionLabel}>Payment</span>
                <div className={s.line}>
                  <span>Pay with</span>
                  <strong>GCash</strong>
                </div>
                <div className={cn(s.line, s.points)}>
                  <span>Suki points you’ll earn</span>
                  <strong>+{(BASKET.total / PESOS_PER_POINT).toFixed(2)}</strong>
                </div>
                <div className={s.total}>
                  <span>Total</span>
                  <span>{peso(BASKET.total)}</span>
                </div>
                <div className={cn(s.place, stage === 1 && s.placing)}>{stage === 1 ? "Placing order…" : "Place order"}</div>
              </div>
            )}

            <div className={s.tabbar}>
              <Icon name="home" />
              <Icon name="receipt" className={s.tabActive} />
              <Icon name="star" />
              <Icon name="cart" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
