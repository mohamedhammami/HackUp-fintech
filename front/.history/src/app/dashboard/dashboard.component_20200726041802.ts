import { Component, OnInit } from "@angular/core";
import { AuthService } from "app/services/auth.service";
import { MatDialog } from "@angular/material";
import { CandidateService } from "../services/candidates.service";
import { StatService } from "../services/stat.service";
import { ElectoralModal, CandidateModel } from "../models/candidate.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public single = [];
  public multi = [
    {
      name: "Germany",
      series: [
        {
          name: "2017",
          value: 71632
        },
        {
          name: "2010",
          value: 40632
        },
        {
          name: "2000",
          value: 76953
        },
        {
          name: "1990",
          value: 31476
        }
      ]
    },
    {
      name: "USA",
      series: [
        {
          name: "2017",
          value: 82632
        },
        {
          name: "2010",
          value: 49737
        },
        {
          name: "2000",
          value: 55986
        },
        {
          name: "1990",
          value: 37060
        }
      ]
    },
    {
      name: "France",
      series: [
        {
          name: "2017",
          value: 51732
        },
        {
          name: "2010",
          value: 36745
        },
        {
          name: "2000",
          value: 34774
        },
        {
          name: "1990",
          value: 29476
        }
      ]
    },
    {
      name: "UK",
      series: [
        {
          name: "2017",
          value: 95652
        },
        {
          name: "2010",
          value: 36240
        },
        {
          name: "2000",
          value: 32543
        },
        {
          name: "1990",
          value: 26424
        }
      ]
    }
  ];

  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = false;
  public xAxisLabel = "Year";
  public showYAxisLabel = false;
  public yAxisLabel = "Population";
  public colorScheme = {
    domain: ["#673ab7", "#f44336", "#009688 ", "#2196f3"]
  };
  public autoScale = true;

  rows = [];

  // Shared chart options
  globalChartOptions: any = {
    responsive: true,
    legend: {
      display: false,
      position: "bottom"
    }
  };

  pieChartData: number[] = [300, 500, 100];
  doughnutOptions: any = Object.assign(
    {
      elements: {
        arc: {
          borderWidth: 0
        }
      }
    },
    this.globalChartOptions
  );
  doughnutChartColors: any[] = [
    {
      backgroundColor: ["#673ab7", "#f44336", "#009688 ", "#2196f3"]
    }
  ];
  pieChartLabels: string[] = ["Download Sales", "In-Store Sales", "Mail Sales"];
  pieChartType = "pie";

  // Bar
  barChartLabels: string[] = ["1", "2", "3", "4", "5", "6", "7"];
  barChartType = "bar";
  barChartLegend = true;
  barChartData: any[] = [
    {
      data: [15],
      label: "Series A",
      borderWidth: 0
    },
    {
      data: [20],
      label: "Series B",
      borderWidth: 0
    }
  ];
  barChartOptions: any = Object.assign(
    {
      scaleShowVerticalLines: false,
      tooltips: {
        mode: "index",
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0,0,0,0.02)",
              defaultFontColor: "rgba(0,0,0,0.02)",
              zeroLineColor: "rgba(0,0,0,0.02)"
            },
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0,0,0,0.02)",
              defaultFontColor: "rgba(0,0,0,0.02)",
              zeroLineColor: "rgba(0,0,0,0.02)"
            },
            stacked: true
          }
        ]
      }
    },
    this.globalChartOptions
  );

  // Bubble Chart
  bubbleChartData: Array<any> = [
    {
      data: [
        {
          x: 6,
          y: 5,
          r: 15
        },
        {
          x: 5,
          y: 4,
          r: 10
        },
        {
          x: 8,
          y: 4,
          r: 6
        },
        {
          x: 8,
          y: 4,
          r: 6
        },
        {
          x: 5,
          y: 14,
          r: 14
        },
        {
          x: 5,
          y: 6,
          r: 8
        },
        {
          x: 4,
          y: 2,
          r: 10
        }
      ],
      label: "Series A",
      borderWidth: 1
    }
  ];
  bubbleChartType = "bubble";

  // combo chart
  comboChartLabels: Array<any> = ["Candidates"];
  chartColors: Array<any> = [
    {
      // red
      backgroundColor: "#f44336",
      borderColor: "#f44336",
      pointBackgroundColor: "#f44336",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    {
      // blue
      backgroundColor: "#7986cb",
      borderColor: "#3f51b5",
      pointBackgroundColor: "#3f51b5",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    {
      // grey
      backgroundColor: "rgba(148,159,177,0.2)",
      borderColor: "rgba(148,159,177,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  comboChartLegend = true;
  barData = [
    {
      data: [5],
      label: "ssss",
      borderWidth: 1,
      type: "bar"
    },
    {
      data: [13],
      label: "ddd",
      borderWidth: 1,
      type: "bar"
    },
    {
      data: [6],
      label: "qqq",
      borderWidth: 1,
      type: "bar"
    }
  ];
  ComboChartData: Array<any> = [];
  ComboChartData2: Array<any> = [];
  ComboChartOptions: any = Object.assign(
    {
      animation: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0,0,0,0.02)",
              zeroLineColor: "rgba(0,0,0,0.02)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0,0,0,0.02)",
              zeroLineColor: "rgba(0,0,0,0.02)"
            },
            ticks: {
              beginAtZero: true,
              suggestedMax: 9
            }
          }
        ]
      }
    },
    this.globalChartOptions
  );

  // newsfeed
  messages: Object[] = [
    {
      from: "Carolyn",
      message: "Contrary to popular belief, Lorem Ipsum",
      photo: "assets/images/face3.jpg",
      subject: "Met, consectetur adipisic"
    },
    {
      from: "Chloe",
      message: "It has roots in a piece of classica",
      photo: "assets/images/face6.jpg",
      subject: "Consectetur adipisic"
    },
    {
      from: "Diana",
      message: "Professor at Hampden-Sydney College in Virginia",
      photo: "assets/images/face4.jpg",
      subject: "Onsectetur adipisic"
    }
  ];
  nbCandidates = 0;
  candidates = [];
  nbElectorals = 0;
  electorals: Array<ElectoralModal> = [];
  nbUsers = 0;
  users = [];
  isAdmin = false;
  candStat = false;

  constructor(
    private statService: StatService,
    public dialog: MatDialog,
    private authService: AuthService,
    private candidateService: CandidateService,
    private router: Router,
    private userService: AuthService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.isRole("Admin");
    this.loadCandidates();
    this.loadElectorals();
    this.loadUsers();
    this.loadListStat();
  }

  async loadUsers() {
    try {
      const result: any = await this.userService.getUsers();
      if (result) {
        this.users = result;
        this.nbUsers = result.length;
      }
    } catch (error) {}
  }
  async loadCandidates() {
    try {
      const result: any = await this.candidateService.getCandidates(1, 100);
      if (result) {
        this.candidates = result;
        this.nbCandidates = result.length;
      }
    } catch (error) {}
  }
  async loadElectorals() {
    try {
      const result: any = await this.candidateService.getElectorals();
      if (result) {
        this.nbElectorals = result.length;
        this.electorals = result;
      }
    } catch (error) {}
  }
  async loadListStat() {
    try {
      const result: any = await this.statService.getListStat();
      if (result) {
        this.single = [...result];
      }
    } catch (error) {}

    this.ComboChartData = [];
    this.ComboChartData2 = [];
    try {
      const result: any = await this.statService.getCandidateStat();
      const array = [];
      let i = 0;
      result.map(stat => {
        const element = {
          data: [stat.value],
          label: stat.name,
          borderWidth: 1,
          type: "bar"
        };
        if (i < 3) {
          array.push(element);
        }
        i++;
      });
      this.ComboChartData = array;
    } catch (error) {}

    const sorting = this.candidates.sort((c1: any, c2: any) => {
      return c2.rating - c1.rating;
    });
    let k = 0;
    const arrayCand = [];
    sorting.map(candidate => {
      const element = {
        data: [candidate.rating],
        label: candidate.firstname + " " + candidate.lastname,
        borderWidth: 1,
        type: "bar"
      };
      if (k < 3) {
        arrayCand.push(element);
      }
      k++;
    });
    this.ComboChartData2 = arrayCand;
    this.candStat = true;
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open("GET", `assets/data/projects.json`); 
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }
  onClickList(event) {
    console.log({ event });
    const electoral: ElectoralModal = this.electorals.find(
      e => e.name == event.name
    );
    this.router.navigateByUrl("/electorals/show/" + electoral.id);
  }
  // tslint:disable-next-line:prefer-const
  let colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

  /* large line chart */
  // tslint:disable-next-line:prefer-const
  let chLine = document.getElementById("chLine");
  // tslint:disable-next-line:prefer-const
  let chartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      data: [589, 445, 483, 503, 689, 692, 634],
      backgroundColor: 'transparent',
      borderColor: colors[0],
      borderWidth: 4,
      pointBackgroundColor: colors[0]
    },
    {
      data: [639, 465, 493, 478, 589, 632, 674],
      backgroundColor: colors[3],
      borderColor: colors[1],
      borderWidth: 4,
      pointBackgroundColor: colors[1]
    }]
  };
  
  if (chLine) {
    new Chart(chLine, {
    type: 'line',
    data: chartData,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
    });
  }
  
}
